import Input from "./Input";

export default function NewProject() {
  return (
    <div className="w-[35rem] mt-16 ">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-900 ">Cancel</button>
        </li>
        <li>
          <button className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md">Save</button>
        </li>
      </menu>
      <div>
        <Input title="Title" />
        <Input
          title="Description"
          isTextArea // isTextArea is the same as isTextArea={true}
        />
        <Input title="Due Date" />
      </div>
    </div>
  );
}