const voting = (n) => {
    let vote = n>=18? "He/She will be eligible to vote" : "He/She is not eligible to vote"
    console.log(vote);
}

let n = 18;
console.log("Age is " , n);
voting(n);