/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import * as s from "./style";

function PetShopping() {
    const count = 5;

    return (
        <div css={s.layout}>
            <div css={s.categoryHeader}>
            <Link css={s.linkButtons} to="/">전체</Link>
            <Link css={s.linkButtons} to="/">사료</Link>
            <Link css={s.linkButtons} to="/">분유</Link>
            <Link css={s.linkButtons} to="/">간식</Link>
            <Link css={s.linkButtons} to="/">영양제</Link>
            <Link css={s.linkButtons} to="/">위생/배변</Link>
            <Link css={s.linkButtons} to="/">미용/목욕용품</Link>
            <Link css={s.linkButtons} to="/">하우스</Link>
            <Link css={s.linkButtons} to="/">장난감/훈련용품</Link>
            <Link css={s.linkButtons} to="/">울타리/이동장</Link>
            </div>
            <div css={s.shoppingFilter}>
            <div>{count}개의 상품</div>
            <div>
                좋아요순
            </div>

            </div>
            <div css={s.shoppingContainer}>
                <div css={s.imageBox}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9G83jGA2p3VdAc_LtIqfu_zNEIVPxB_9F85CyYNL7iA&s" alt="" />
                    <div css={s.nameBox}>짱구 우산</div>
                    <div css={s.moneyBox}>
                        20000원
                    </div>
                </div>
                <div css={s.imageBox}>
                    <img src="https://i.namu.wiki/i/zfd-NOPP39XJ49BUBLXu8d3SAPsYnpvqYviuQHzSe8FqI6DhYAaHp5Nx30dWi_Q5XGUcbczMfuSp1lOMAN3NvA.webp" alt="" />
                    <div css={s.nameBox}>훈발롬</div>
                    <div css={s.moneyBox}>
                        20000원
                    </div>
                </div>
                <div css={s.imageBox}>
                    <img src="https://i.namu.wiki/i/2NE9ni_Jk32mN-zEQrswpjEA_iZ1lK_gbDo2tG44wlLxmN-0M4wp8ALSIX-Qxy1yK1fpBqEO1jDXxWyViV_pBA.webp" alt="" />
                    <div css={s.nameBox}>맹궁</div>
                    <div css={s.moneyBox}>
                        20000원
                    </div>
                </div>
                <div css={s.imageBox}>
                    <img src="https://i.namu.wiki/i/G9zOqNkgEpgPj7nx65voRxEER5xG_jBeXugTKthz6qN4HLIyZ81c-Q9C0QsAxaiNpLmg5xOpoY4QdVLP0ZAo9g.webp" alt="" />
                    <div css={s.nameBox}>짱앙</div>
                    <div css={s.moneyBox}>
                        20000원
                    </div>
                </div>
                <div css={s.imageBox}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs_W8Hg8qiuj1qe4ZvNtd_rF3iaU4J0U18wa7RRIrl2Q&s" alt="" />
                    <div css={s.nameBox}>철쑤</div>
                    <div css={s.moneyBox}>
                        20000원
                    </div>
                </div>
                <div css={s.imageBox}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs_W8Hg8qiuj1qe4ZvNtd_rF3iaU4J0U18wa7RRIrl2Q&s" alt="" />
                    <div css={s.nameBox}>철쑤</div>
                    <div css={s.moneyBox}>
                        20000원
                    </div>
                </div>
                <div css={s.imageBox}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs_W8Hg8qiuj1qe4ZvNtd_rF3iaU4J0U18wa7RRIrl2Q&s" alt="" />
                    <div css={s.nameBox}>철쑤</div>
                    <div css={s.moneyBox}>
                        20000원
                    </div>
                </div>
                <div css={s.imageBox}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs_W8Hg8qiuj1qe4ZvNtd_rF3iaU4J0U18wa7RRIrl2Q&s" alt="" />
                    <div css={s.nameBox}>철쑤</div>
                    <div css={s.moneyBox}>
                        20000원
                    </div>
                </div>
                <div css={s.imageBox}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs_W8Hg8qiuj1qe4ZvNtd_rF3iaU4J0U18wa7RRIrl2Q&s" alt="" />
                    <div css={s.nameBox}>철쑤</div>
                    <div css={s.moneyBox}>
                        20000원
                    </div>
                </div>
                <div css={s.imageBox}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs_W8Hg8qiuj1qe4ZvNtd_rF3iaU4J0U18wa7RRIrl2Q&s" alt="" />
                    <div css={s.nameBox}>철쑤</div>
                    <div css={s.moneyBox}>
                        20000원
                    </div>
                </div>
                <div css={s.imageBox}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs_W8Hg8qiuj1qe4ZvNtd_rF3iaU4J0U18wa7RRIrl2Q&s" alt="" />
                    <div css={s.nameBox}>철쑤</div>
                    <div css={s.moneyBox}>
                        20000원
                    </div>
                </div>
                <div css={s.imageBox}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs_W8Hg8qiuj1qe4ZvNtd_rF3iaU4J0U18wa7RRIrl2Q&s" alt="" />
                    <div css={s.nameBox}>철쑤</div>
                    <div css={s.moneyBox}>
                        20000원
                    </div>
                </div>
                <div css={s.imageBox}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs_W8Hg8qiuj1qe4ZvNtd_rF3iaU4J0U18wa7RRIrl2Q&s" alt="" />
                    <div css={s.nameBox}>철쑤</div>
                    <div css={s.moneyBox}>
                        20000원
                    </div>
                </div>
                
                
            
            </div>
        </div>
    );
}

export default PetShopping;