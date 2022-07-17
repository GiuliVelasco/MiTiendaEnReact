import './NavBar.css'

const NavBar = () => {
    return (
        <div className='NavBar'>
            <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Vino para hablar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Productos
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Vinos tranquilos</a></li>
                                    <li><a class="dropdown-item" href="#">Vinos espumantes</a></li>
                                    <li><a class="dropdown-item" href="#">Vinos orgánicos</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="../index.js">Tienda</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="../index.js">Novedades</a>
                            </li>
                        </ul>
                    </div>
                    <div class="container">
                        <a class="navbar-brand" href="../index.js">
                            <img class="iconoNav" src="../imagenes/iconoVPH.png" alt="icono de VPH"></img>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;