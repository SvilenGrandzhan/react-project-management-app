import NewTask from "./NewTask";
export default function Tasks({ onAdd, onDelete }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      <p className="text-stone-800 my-4">Conditional text: This project does not have any tasks</p>
      <ul>
        <li>Ordered list item 1</li>
      </ul>
    </section>
  );
}
