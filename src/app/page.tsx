import Image from "next/image";
import { addTask } from "./actions";

export default async function Home() {
  const tasks = [
    {
      id: 1,
      name: "task 1",
    },
    {
      id: 2,
      name: "task 2",
    },
  ];
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Tasks:</h1>

        <ul className="my-10 text-center">
          {tasks.map((task) => (
            <li key={task.id}>{task.name}</li>
          ))}
        </ul>

        <form action={addTask} className="space-x-2 h-4">
          <input type="text" name="title" className="px-3 py-1 rounded" />
          <button
            type="submit"
            className="bg-blue-500 px-3 py-1 text-white rounded"
          >
            Add task
          </button>
        </form>
      </main>
    </div>
  );
}
