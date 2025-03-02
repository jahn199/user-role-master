import axios from 'axios';
// API_URL 이름 사용 금지
const API_CLOTHES_URL = "http://localhost:8080/api/clothes";

const apiClothesService =  {
    getAllClothes :
      function (setClothes) {
        axios.get(API_CLOTHES_URL)
            .then(
                (res) => {
                console.log("옷 나열 : ", res.data);
                if(res.data.length > 0) {
                    setClothes(res.data);
                } else {
                    alert("가져올 수 있는 데이터가 없습니다.");
                }

          })
            .catch((err) => {
                alert("데이터를 가져올 수 없습니다.")
                console.log("개발자가 볼 수 있는 에러 메세지 : ", err);
            })
      },

    getClothesById :
        function (cid, setClothes, setErr) {
          axios.get(`${API_CLOTHES_URL}/${cid}`)
              .then(
                  res =>
                      setClothes(res.data)
              )
              .catch(
                  err => {
                      alert("백엔드에서 데이터를 가져올 수 없습니다.");
                      console.log("개발자가 확인할 수 있는 메세지 : ", setErr(err));
                  }
              )
        },

    insertClothes:
        function (clothes, callback,errorCallback) {
        axios.post(API_CLOTHES_URL, clothes, {
                headers: { "Content-Type": "application/json" },
            })
            .then((res) => {
                alert(callback);
            })
            .catch((err) => {
                alert(errorCallback);
                console.error("개발자가 확인할 수 있는 에러 메시지:", err);
            });
    },

    updateClothes :
        function (cid, cData, callback, errorCallback) {
          axios.put(`${API_CLOTHES_URL}/${cid}`, cData, {
              headers : {"Content-Type": "application/json"}
          })
              .then(
                  (res) => {
                      if(res.data && res.data.updatedAt) {
                          alert("변경된 내용이 없습니다.")
                      } else {
                          alert(callback);
                      }
                  }
              )
              .catch(
                  (err) => {
                      alert(errorCallback);
                      console.error("개발자가 확인할 수 있는 에러 메세지 : ", err);
                  }
              )
        },

    deleteClothes :
        function (cid, callback, errorCallback) {
          axios.delete(`${API_CLOTHES_URL}/${cid}`)
              .then(
                  (res) => {
                      alert(callback);
                  }
              )
              .catch(
                  err => {
                      alert(errorCallback);
                      console.error("개발자가 확인할 수 있는 에러 메세지 : ", err);
                  }
              )
        }
}

export default apiClothesService;