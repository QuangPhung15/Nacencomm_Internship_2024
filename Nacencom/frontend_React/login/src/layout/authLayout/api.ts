import axios from "axios";

async function test() {
    await axios
        .get("http://localhost:5005/v1")
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
}

async function signup() {}

export { test };
