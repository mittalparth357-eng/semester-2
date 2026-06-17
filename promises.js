const myPromise = new Promise((resolve,reject) =>{
    let age =19;
    if(age>=18){
        resolve("Eligible to vote.")
    } else{
        reject("Not eligible to vote")
    }
})
const checkVoteEligibility = async() => {
    const response = await myPromise;
    console.log(response);
}
checkVoteEligibility();