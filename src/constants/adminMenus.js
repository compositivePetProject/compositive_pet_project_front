import { RiProductHuntLine } from "react-icons/ri";

export const menus = [
    {
        id: 1,
        name: "상품관리",
        path: "/admin/management/product?page=1",
        icon: <RiProductHuntLine />
    },
    {
        id: 2,
        name: "가입고관리",
        path: "/admin/management/incoming/product?page=1",
        icon: <RiProductHuntLine />
    },
    {
        id: 3,
        name: "재고관리",
        path: "/admin/management/stock/product?page=1",
        icon: <RiProductHuntLine />
    },
    {
        id: 4,
        name: "주문현황",
        path: "/admin/management/order/product?page=1",
        icon: <RiProductHuntLine />
    },
    {
        id: 5,
        name: "출고현황",
        path: "/admin/management/outgoing/product?page=1",
        icon: <RiProductHuntLine />
    }
]