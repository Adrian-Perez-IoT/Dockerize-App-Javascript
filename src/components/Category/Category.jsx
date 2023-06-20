import "./Category.css";
function Categorias() {
  return (
    <>
      <div className="container d-flex w-100 align-items-center">
        <div className="flex-grow-0">
          <a className="nav-link" href="#" title="Comprar por Categorías">
            <span>
              Comprar por <br /> Categorías
            </span>
          </a>
        </div>
        <div className="d-flex bg-danger flex-grow-1">
          <div className="btn-category">
            <button type="button" className="btn btn-danger">
              <img src="/src/assets/cat98-notebooks.webp" alt="Notebook" />
              <p>Notebook</p>
            </button>
          </div>

          <div className="btn-category">
            <button type="button" className="btn btn-danger">
              <img src="/src/assets/cat82-celulares.webp" alt="Celulares" />
              <p>Celulares</p>
            </button>
          </div>
          <div className="btn-category">
            <button type="button" className="btn btn-danger ">
              <img src="/src/assets/cat99-tablets.webp" alt="Tablets" />
              <p>Tablets</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categorias;