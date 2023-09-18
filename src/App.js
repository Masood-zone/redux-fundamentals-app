import Footer from "./redux/features/footer";
import Header from "./redux/features/header";
import TodoList from "./redux/features/todos/TodoList";

function App() {
  return (
    <div className="">
      <nav>
        <section>
          <h1>Redux Fundamentals Example</h1>
        </section>
      </nav>
      <main>
        <section className="medium-container">
          <h2>Todos</h2>
          <div className="todoapp">
            <Header />
            <TodoList />
            <Footer />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
