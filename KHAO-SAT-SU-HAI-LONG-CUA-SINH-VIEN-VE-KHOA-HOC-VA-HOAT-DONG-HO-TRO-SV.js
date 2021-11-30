(function () {
    let value = '4';

    let allInputs = document.getElementsByTagName('input');

    let results = [];
    for (let x = 0; x < allInputs.length; x++)
        if (allInputs[x].value == value) results.push(allInputs[x]);

    results.forEach((element) => {
        element.click();
    });
})();
