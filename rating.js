class Rating{
    static submittedRatings = [];

    static submitRating() {
        let rating = document.querySelector("#rating").value;
        rating = parseInt(rating);
        if (!Number.isInteger(rating) || rating < 1 || rating > 7) {
            alert("Enter a number between 1 and 7")
            return false;
        }else{
            Rating.submittedRatings.push(rating);
            let enteredNumbers = document.querySelector('#enteredNumbers');
            enteredNumbers.innerHTML = Rating.submittedRatings;
            document.querySelector(".rating").value = '';
        }
    }

    static showResults(submittedRatings) {
        let count = {};
        submittedRatings.forEach(i => count[i] = (count[i] || 0) + 1);
        const tbody = document.querySelector("tbody");
        for (let key of Object.keys(count)) {
            let row = document.createElement('tr');
            row.innerHTML = `
                <td>&emsp;${key}</td>
                <td>&emsp;${count[key]}</td>`;
            tbody.appendChild(row);
        }
    }
}

const btnSubmit = document.querySelector('#submit');
btnSubmit.addEventListener("click", function(){Rating.submitRating()});

const btnResults = document.querySelector('#results');
btnResults.addEventListener("click", () => {
    Rating.showResults(Rating.submittedRatings)
}, {once : true} );