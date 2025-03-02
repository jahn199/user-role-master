import {useEffect, useState} from "react";
import apiClothesService from "./apiClothesService";
import {Link} from "react-router-dom";


const ClothesList = () => {
    const [clothes, setClothes] = useState([]);

    useEffect(() => {
        apiClothesService.getAllClothes(setClothes);
    }, []);

    const handleDelete = () => {
        if (window.confirm("정말 삭제하시겠습니까?")) {
            apiClothesService.deleteClothes(1, "삭제성공", "삭제실패");
        }
    }

    return (
        <div className="ClothesList-container">
            <h2>옷 목록</h2>
            <ul>
                {clothes.length > 0 ? (
                    clothes.map(
                        (c) => (
                            <li key={c.cid}>
                                <h2>상품명 : {c.cname}</h2>
                                <p>브랜드명 : {c.cbrand}</p>
                                <p>색 : {c.ccolor}</p>
                                <p>사이즈 : {c.csize}</p>
                                <p>가격 : {c.cprice}원</p>
                                <p>개수 : {c.cstock}개</p>
                                <Link to={`/clothes/${c.cid}`}>{c.cname}</Link>
                                <button onClick={() => handleDelete(c.cid)}>삭제</button>
                            </li>
                        )
                    )
                ) : (
                    <p>옷이 없습니다.</p>
                )
                }
            </ul>
        </div>
    );
}

export default ClothesList;