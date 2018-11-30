
function load(loader) {
    let promise;
    let spinner = document.querySelector(".spinner");
    spinner.style.display = "block";
    if (!loader) promise = null;
    promise = loader();
    promise.then(function() {
        spinner.style.display = "none";
    });
}
