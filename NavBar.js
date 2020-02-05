export default function NavBar(page){
    return `
    <nav>
    ${page==='project'? (
        `
        <ul>
            <li>
                <a href="index.html">Go Back</a>
            </li>
        </ul>
        `
    ):(
        `
        <ul class="relative">
            <li>
                <a href="#about">About</a>
            </li>
            <li>|</li>
            <li>
                <a href="#news">News</a>
            </li>
            <li>|</li>
            <li>
                <a href="#projects">Projects</a>
            </li>
        </ul><hr>
        `
    )}
    </nav>`;
}