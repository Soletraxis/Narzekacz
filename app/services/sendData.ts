const sendData = (data :any) => {
    let apostle = require("apostle.io");
    apostle.domainKey = "436094aee30a491689a7834aaacbfcfcf9d75a3e";

    apostle.deliver("report", {
        email: "narzekaczbot@gmail.com",
        data
    }).then(()=>console.log('Sukces'), (e :any)=>console.log(e))
}

export default sendData;
