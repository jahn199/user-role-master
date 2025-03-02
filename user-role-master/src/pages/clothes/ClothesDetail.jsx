import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import apiClothesService from "./apiClothesService";

const ClothesDetail = () => {
    const {cid} = useParams();
    const [clothes, setClothes] = useState(null);
    const navigate = useNavigate();
    const [err, setErr] = useState(null);

    useEffect(() => {
        apiClothesService.getClothesById(cid, setClothes, setErr)
    }, [cid]);

    if (!clothes) return <p>로딩 중입니다.</p>;

    return (
        <div className="Clothes-container">
            <h1>{clothes.cname}</h1>
            <p><strong>카테고리:</strong> {clothes.cCategory}</p>
            <p><strong>브랜드:</strong> {clothes.cBrand}</p>
            <p><strong>색상:</strong> {clothes.cColor}</p>
            <p><strong>사이즈:</strong> {clothes.cSize}</p>
            <p><strong>소재:</strong> {clothes.cMaterial}</p>
            <p><strong>가격:</strong> {clothes.cPrice}원</p>
            <p><strong>재고:</strong> {clothes.cStock}개</p>
            <p><strong>성별:</strong> {clothes.cGender}</p>
            <p><strong>시즌:</strong> {clothes.cSeason}</p>
            <p><strong>등록 날짜:</strong> {clothes.cRegisterDate}</p>
            <button onClick={() => navigate(`/clothes/edit/${clothes.cid}`)}>수정</button>
        </div>
    )
}
export default ClothesDetail;