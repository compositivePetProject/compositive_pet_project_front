
// import { Route, Routes } from 'react-router-dom';
// import AuthPage from '../../pages/AuthPage/AuthPage';
// import RootHeader from '../../components/RootHeader/RootHeader';
// import PageContainer from '../../components/PageContainer/PageContainer';
// import RootFooter from '../../components/RootFooter/RootFooter';

// import React from 'react';
// import CommunityBoardPage from '../../pages/CommunityBoardPage/CommunityBoardPage';
// import CommunityBoardDogPage from '../../pages/CommunityBoardDogPage/CommunityBoardDogPage';
// import CommunityBoardWritePage from '../../pages/CommunityBoardWritePage/CommunityBoardWritePage';
// import { useQuery } from 'react-query';
// import { getPrincipalRequest } from '../../apis/api/communityBoard';
// import CommunityBoardDetailPage from '../../pages/CommunityBoardDetailPage/CommunityBoardDetailPage';
// import CommunityBoardCatPage from '../../pages/CommunityBoardCatPage/CommunityBoardCatPage';
// import CoummunityBoardAdminPage from '../../pages/CommunityBoardAdminPage/CoummunityBoardAdminPage';
// import CommunityBoardAdminDetailPage from '../../pages/CommunityBoardAdminDetailPage/CommunityBoardAdminDetailPage';
// import CommunityBoardAdminRegisterPage from '../../pages/CommunityBoardAdminRegisterPage/CommunityBoardAdminRegisterPage';



// // 임시로 추가함.
// function AuthRoute(props) {
//     const principalQuery = useQuery(["principalQuery"], 
//     getPrincipalRequest, 
//     {
//         retry: 0,
//         refetchOnWindowFocus: false,
//         onSuccess: response => {
//         },
//         onError: error => {
//         }
//     });

//     return (
//         <>
//             <RootHeader />
//             <PageContainer>
//                 <Routes>
//                     <Route path="/auth/*" element={ <AuthPage /> } />
//                     <Route path="/community/getboards" element={<CommunityBoardPage />} />
//                     <Route path="/community/dog" element={<CommunityBoardDogPage />} />
//                     <Route path='/community/cat' element={<CommunityBoardCatPage />} /> 
//                     <Route path="/community/board/write" element={<CommunityBoardWritePage />} />
//                     <Route path="/community/board/:boardId" element={<CommunityBoardDetailPage />} />
//                     <Route path="/community/admin/list/boards" element={<CoummunityBoardAdminPage />} />
//                     <Route path="/community/admin/" element={<CommunityBoardAdminDetailPage />} />
//                     <Route path="/community/admin/noticewrite" element={<CommunityBoardAdminRegisterPage />} />
                    
//                 </Routes>
//             </PageContainer>
//             <RootFooter />
//         </>
//     );
// }


// export default CommunityBoardRoute;