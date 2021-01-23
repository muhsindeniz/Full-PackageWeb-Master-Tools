function generate() {
    var hashText = document.getElementById("hashInput").value;

    if (hashText.length <= 0) {

    } else {
        Swal.fire({
            icon: 'success',
            title: 'MD5 Hash Code',
            text: CryptoJS.MD5(hashText),
            showConfirmButton: true,
        })
    }
}

function sh1Generate() {
    var hashText = document.getElementById("hashInput").value;

    if (hashText.length <= 0) {

    } else {
        Swal.fire({
            icon: 'success',
            title: 'SHA1 Hash Code',
            text: CryptoJS.SHA1(hashText),
            showConfirmButton: true,
        })
    }
}

function sh3Generate() {
    var hashText = document.getElementById("hashInput").value;

    if (hashText.length <= 0) {

    } else {
        Swal.fire({
            icon: 'success',
            title: 'SHA3 Hash Code',
            text: CryptoJS.SHA3(hashText),
            showConfirmButton: true,
        })
    }
}

function sh256Generate() {
    var hashText = document.getElementById("hashInput").value;

    if (hashText.length <= 0) {

    } else {
        Swal.fire({
            icon: 'success',
            title: 'SHA256 Hash Code',
            text: CryptoJS.SHA256(hashText),
            showConfirmButton: true,
        })
    }
}

function sh512Generate() {
    var hashText = document.getElementById("hashInput").value;

    if (hashText.length <= 0) {

    } else {
        Swal.fire({
            icon: 'success',
            title: 'SHA512 Hash Code',
            text: CryptoJS.SHA512(hashText),
            showConfirmButton: true,
        })
    }
}

function ripemd160Generate() {
    var hashText = document.getElementById("hashInput").value;

    if (hashText.length <= 0) {

    } else {
        Swal.fire({
            icon: 'success',
            title: 'RIPEMD160 Hash Code',
            text: CryptoJS.RIPEMD160(hashText),
            showConfirmButton: true,
        })
    }
}