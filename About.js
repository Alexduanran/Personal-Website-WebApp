export default function About(about){
    return `
    <a class="about" href="#about">
            About
    </a>
    <!-- we will add a filter interface here in the next lab -->
    <div id="about" style="padding-top: 130px; margin-top: -130px;">
        <div class="row">
            <div class="col-6 profile-image">
                <img src="${about.photo}" alt="self portrait" width="60%" height="100%">
            </div>
            <div class="col-6"> 
                <p>
                    ${about.description}
                </p>
            </div>
        </div>
        <div>
            <p>
                <strong>${about.title}</strong><br>
                <strong>Major:</strong> ${about.major}<br>
                <strong>Minor:</strong> ${about.minor}<br>
                <strong>E-mail:</strong> ${about.email}<br>
                ${about.address}
                <a href="${about.github}" target="_blank">
                    <i class="fab fa-github"></i>
                </a>
            </p>
        </div>
    </div>`;
}