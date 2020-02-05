export default function Header(header){
    return `
    <div class="fixed">
        <div class="blurry"></div>
        <h1 class="name" style="font-size: 280%;">${header.name}</h1>
        <hr style="margin-left: -1000px">
    </div>
    `;
}