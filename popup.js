document.addEventListener('DOMContentLoaded', function (event) {
    window.setTimeout(function () {
        document.getElementById("loader").classList = "pageloader"
    }, 1200)

})
const addressInput = document.getElementById("setupWizard_read_address").value;
document.getElementById("setupWizard_read").onclick = async function () {
    const reader = new PassportReader();
    const passport = await reader.getPassport(addressInput);
    console.log(passport);
    if (passport == false) {
        hide("setupWizard")
        show("passportScreen")
        show("passportScreen_options")
        show("passportScreen_Menu")
    }
}
document.getElementById("passportScreen_create_pass").onclick = async function () {
    const verifier = new PassportVerifier();
    const verified = await verifier.verifyCredential({

    });
}
