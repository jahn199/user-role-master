import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import apiClothesService from "./apiClothesService";

const EditClothes = () => {
    const { cid } = useParams();
    const navigate = useNavigate();
    const [clothes, setClothes] = useState(null);

    const [cName, setCName] = useState("");
    const [cCategory, setCCategory] = useState("");
    const [cBrand, setCBrand] = useState("");
    const [cColor, setCColor] = useState("");
    const [cSize, setCSize] = useState("");
    const [cMaterial, setCMaterial] = useState("");
    const [cPrice, setCPrice] = useState(0);
    const [cStock, setCStock] = useState(0);
    const [cGender, setCGender] = useState("");
    const [cSeason, setCSeason] = useState("");

    useEffect(() => {
        apiClothesService.getClothesById(cid,
            (cData) => {
                setClothes(cData);
                setCName(cData.cName);
                setCCategory(cData.cCategory);
                setCBrand(cData.cBrand);
                setCColor(cData.cColor);
                setCSize(cData.cSize);
                setCMaterial(cData.cMaterial);
                setCPrice(cData.cPrice);
                setCStock(cData.cStock);
                setCGender(cData.cGender);
                setCSeason(cData.cSeason);
            },
            (err) => console.error("에러 발생:", err)
        );
    }, [cid]);


    const handleUpdate = () => {
        const updatedClothes = {
            id: cId,
            cName,
            cCategory,
            cBrand,
            cColor,
            cSize,
            cMaterial,
            cPrice,
            cStock,
            cGender,
            cSeason,
        };

        apiClothesService.updateClothes(cId, updatedClothes, () => {
            alert("옷 정보가 수정되었습니다!");
            navigate("/clothes");
        });
    };

    return (
        <div className="container">
            <h2>옷 정보 수정</h2>

            <input type="text" placeholder="이름" value={cName} onChange={(e) => setCName(e.target.value)} />
            <input type="text" placeholder="카테고리" value={cCategory} onChange={(e) => setCCategory(e.target.value)} />
            <input type="text" placeholder="브랜드" value={cBrand} onChange={(e) => setCBrand(e.target.value)} />
            <input type="text" placeholder="색상" value={cColor} onChange={(e) => setCColor(e.target.value)} />
            <input type="text" placeholder="사이즈" value={cSize} onChange={(e) => setCSize(e.target.value)} />
            <input type="text" placeholder="소재" value={cMaterial} onChange={(e) => setCMaterial(e.target.value)} />
            <input type="number" placeholder="가격" value={cPrice} onChange={(e) => setCPrice(Number(e.target.value))} />
            <input type="number" placeholder="재고" value={cStock} onChange={(e) => setCStock(Number(e.target.value))} />

            <select value={cGender} onChange={(e) => setCGender(e.target.value)}>
                <option value="">성별 선택</option>
                <option value="남성">남성</option>
                <option value="여성">여성</option>
            </select>

            <select value={cSeason} onChange={(e) => setCSeason(e.target.value)}>
                <option value="">계절 선택</option>
                <option value="봄">봄</option>
                <option value="여름">여름</option>
                <option value="가을">가을</option>
                <option value="겨울">겨울</option>
            </select>

            <button onClick={handleUpdate}>수정</button>
        </div>
    );
};

export default EditClothes;
