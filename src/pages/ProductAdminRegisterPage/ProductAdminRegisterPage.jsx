/** @jsxImportSource @emotion/react */
import { useRef, useState } from "react";
import { getProductsAdminRequest, postProductAdminRequest } from "../../apis/api/productAdmin";
import * as s from "./style";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import ProductInput from "../../components/ProductInput/ProductInput";
import ProductQuill from "../../components/ProductQuill/ProductQuill";
import { useProductInput } from "../../hooks/useProductInput";
import Select from "react-select";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { v4 as uuid } from "uuid";
import { storage } from "../../apis/firebase/firebaseConfig";
import ReactQuill from "react-quill";


function ProductAdminRegisterPage(props) {
  const navigate = useNavigate();
  const [ productsAdmin, setProductsAdmin ] = useState([]);
  const [ actionStatus, setActionStatus ] = useState(0);  // 0 = 선택, 1 = 추가, 2 = 수정, 3 = 삭제
  const fileRef = useRef();
  const queryClient = useQueryClient();


  const inputRef = [
    useRef(), // 상품ID 0
    useRef(), // 상품이름 1
    useRef(), // 상품가격 2
    useRef(), // 상품카테고리ID 3
    useRef(), // 상품동물카테고리ID 4
    useRef(), // 상품대표이미지URL 5
    useRef()  // 상품내용 6
  ];

  const nextInput = (ref) => {
    ref.current.focus();
  }

  const productId = useProductInput(nextInput, inputRef[1])
  const productNameKor = useProductInput(nextInput, inputRef[2]);
  const productPrice = useProductInput(nextInput, inputRef[3]);
  const productCategoryId = useProductInput(nextInput, inputRef[4]);
  const productAnimalCategoryId = useProductInput(nextInput, inputRef[5]);
  const productImageUrl = useProductInput(nextInput, inputRef[6]);
  const [productBoardContent, setproductBoardContent] = useState("");

  const productCategoryOptions = [
    {
      value: 1,
      label: "사료"
    },
    {
      value: 2,
      label: "분유"
    },
    {
      value: 3,
      label: "간식"
    },
    {
      value: 4,
      label: "영양제"
    },
    {
      value: 5,
      label: "위생/배변"
    },
    {
      value: 6,
      label: "미용/목용용품"
    },
    {
      value: 7,
      label: "하우스"
    },
    {
      value: 8,
      label: "장난감/훈련용품"
    },
    {
      value: 9,
      label: "울타리/이동장"
    }
  ];

  const productAnimalCategoryOptions = [
    {
      value: 1,
      label: "개"
    },
    {
      value: 2,
      label: "고양이"
    }
  ];

  const modules = {
    toolbar : 
      [
        ['bold', 'italic', 'underline', 'strike'],        
        ['blockquote', 'code-block'],
        ['link', 'image', 'video', 'formula'],
        
        [{ 'header': 1 }, { 'header': 2 }],               
        [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      
        [{ 'indent': '-1'}, { 'indent': '+1' }],          
        [{ 'direction': 'rtl' }],                         
        
        [{ 'size': ['small', false, 'large', 'huge'] }],  
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        
        [{ 'color': [] }, { 'background': [] }],          
        [{ 'font': [] }],
        [{ 'align': [] }],
        
        ['clean']                                         
      ]
  }

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if(files.length === 0) {
      e.target.value = "";
      return;
    }
    if(!window.confirm("상품 대표 이미지 파일을 업로드 하시겠습니까?")) {
      e.target.value = "";
      return;
    }
    const storageRef = ref(storage, `product/image/cover/${uuid()}_${files[0].name}`);
    const uploadTask = uploadBytesResumable(storageRef, files[0]);

    uploadTask.on(
      "state_changed",
      snapshot => {},
        error => {},
        () => {
          alert("업로드를 완료하셨습니다.");
          getDownloadURL(storageRef)
          .then(url => {
            productImageUrl.setValue(url);
          });
        }
    );
  }

  const handleQuillChange = (value) => {
    setproductBoardContent(value);
  }

  const getProductsAdminRequestQuery = useQuery(
    ["getProductsAdminRequestQuery"],
    getProductsAdminRequest, {
        retry: 0,
        onSuccess: (response) => {
            setProductsAdmin(response.data);
        },
        onError: (error) => {
            console.log(error);
        }
    }
  );

  const postProductAdminRequestMutation = useMutation({
    mutationKey: "postProductAdminRequestMutation",
    mutationFn: postProductAdminRequest,
    onSuccess: (response) => {
      alert("애완용품 상품을 등록하였습니다.");
      window.location.replace("/product/admin/register");
    },
    onError: (error) => {
      console.log(error);
    }
  })

  const submit = () => {
    if(actionStatus === 1) {
      postProductAdminRequestMutation.mutate({
        userId: queryClient.getQueryState("principalQuery").data?.data.userId,
        productNameKor: productNameKor.value,
        productPrice: productPrice.value,
        productImageUrl: productImageUrl.value,
        productCategoryId: productCategoryId.value?.value,
        productAnimalCategoryId: productAnimalCategoryId.value?.value,
        productBoardContent
      })
    } else if(actionStatus === 2) {

    } else if(actionStatus === 3) {

    }
  }

  console.log(queryClient.getQueryState("principalQuery").data?.data.userId);
  console.log("productNameKor.value : " + productNameKor.value);
  console.log("productPrice.value : " + productPrice.value);
  console.log("productImageUrl.value : " + productImageUrl.value);
  console.log("productCategoryId.value.value : " + productCategoryId.value?.value);
  console.log("productAnimalCategoryId.value.value : " + productAnimalCategoryId.value?.value);
  console.log(productBoardContent);

  return (
    <div css={s.layout}>
      <div css={s.left}>
        <div onClick={() => navigate("/product/admin/register")}>상품등록및현황</div>
        <div onClick={() => navigate("/product/admin/incomming/stock")}>가입고현황</div>
        <div onClick={() => navigate("/product/admin/current/stock")}>재고현황</div>
        <div onClick={() => navigate("/product/admin/order/detail")}>주문현황</div>
        <div onClick={() => navigate("/product/admin/outgoing/stock")}>출고현황</div>
      </div>
      <div css={s.right}>
        <div>
          <div css={s.rightTop}>
            <h2>상품 등록</h2>
            <div>
              {
                actionStatus === 0
                ?
                  <>
                    <button onClick={() => setActionStatus(1)}>등록</button>
                    <button onClick={() => setActionStatus(2)}>수정</button>
                    <button onClick={() => setActionStatus(3)}>삭제</button>
                  </>
                :
                  <>
                    <button onClick={submit}>확인</button>
                    <button>취소</button>
                  </>
              }
            </div>
          </div>
          <div style={{display: "flex"}}>
            <table>
              <tbody>
                <tr>
                  <th css={s.registerTh}>상품ID</th>
                  <td>
                    <ProductInput
                      value={productId.value}
                      productRef={inputRef[0]}
                      onChange={productId.handleOnChange}
                      onKeyDown={productId.handleOnKeyDown}
                      isDisabled={true}
                    />
                  </td>
                  <th css={s.registerTh}>상품이름</th>
                  <td>
                    <ProductInput
                      value={productNameKor.value}
                      productRef={inputRef[1]}
                      onChange={productNameKor.handleOnChange}
                      onKeyDown={productNameKor.handleOnKeyDown}
                    />
                  </td>
                  <th css={s.registerTh}>상품가격</th>
                  <td>
                    <ProductInput
                      value={productPrice.value}
                      productRef={inputRef[2]}
                      onChange={productPrice.handleOnChange}
                      onKeyDown={productPrice.handleOnKeyDown}
                    />
                  </td>
                </tr>
                <tr>
                  <th css={s.registerTh}>상품카테고리ID</th>
                  <td>
                    <Select
                      options={productCategoryOptions}
                      value={productCategoryId.value}
                      onChange={productCategoryId.handleOnChange}
                      onKeyDown={productCategoryId.handleOnKeyDown}
                      ref={inputRef[3]}
                    />
                  </td>
                  <th css={s.registerTh}>상품동물카테고리ID</th>
                  <td>
                    <Select
                      options={productAnimalCategoryOptions}
                      value={productAnimalCategoryId.value}
                      onChange={productAnimalCategoryId.handleOnChange}
                      onKeyDown={productAnimalCategoryId.handleOnKeyDown}
                      ref={inputRef[4]}
                    />
                  </td>
                </tr>
                <tr>
                  <th css={s.registerTh}>상품대표이미지</th>
                  <td>
                    <ProductInput
                      value={productImageUrl.value}
                      productRef={inputRef[5]}
                      onChange={productImageUrl.handleOnChange}
                      onKeyDown={productImageUrl.handleOnKeyDown}
                    />
                    <input type="file"
                      onChange={handleFileChange}
                    />
                  </td>
                  
                </tr>
              </tbody>
            </table>
            <div css={s.preview}>
              <img src={null} alt="" />
            </div>
          </div>



            <h4>상품상세페이지작성</h4>
            <ReactQuill modules={modules} onChange={handleQuillChange}/>
        </div>
        <div>
          <h2>상품 등록 현황</h2>
          <table>
            <thead>
              <tr>
                <th>상품ID</th>
                <th>상품이름</th>
                <th>상품가격</th>
                <th>상품대표이미지URL</th>
                <th>상품카테고리ID</th>
                <th>상품카테고리이름</th>
                <th>상품동물카테고리ID</th>
                <th>상품동물카테고리이름</th>
                <th>작성자ID</th>
                <th>작성자이름</th>
                <th>작성일자</th>
                <th>수정일자</th>
              </tr>
            </thead>
            <tbody>
              {
                productsAdmin.map((product) => 
                  <tr key={product.productId}>
                    <td>{product.productId}</td>
                    <td>{product.productNameKor}</td>
                    <td>{product.productPrice}</td>
                    <td>{product.productImageUrl}</td>
                    <td>{product.productCategoryId}</td>
                    <td>{product.productCategoryNameKor}</td>
                    <td>{product.productAnimalCategoryId}</td>
                    <td>{product.productAnimalCategoryNameKor}</td>
                    <td>{product.userId}</td>
                    <td>{product.userName}</td>
                    <td>{product.createDate}</td>
                    <td>{product.updateDate}</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>

      </div>
    </div>

  )
}

export default ProductAdminRegisterPage;