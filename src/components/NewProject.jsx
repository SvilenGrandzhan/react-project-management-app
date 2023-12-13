import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAdd }) {
  const title = useRef();
  const description = useRef();
  const date = useRef();
  const modal = useRef();

  const handleCancel = () => {
    title.current.value = "";
    description.current.value = "";
    date.current.value = "";
  };

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDate = date.current.value;
    if (enteredTitle.trim() === "" || enteredDescription.trim() === "" || enteredDate.trim() === "") {
      modal.current.open();
      return;
    }
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      date: enteredDate,
    });
  };

  return (
    <>
      <Modal
        ref={modal}
        label="Close"
      >
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid input</h2>
        <p className="tex-stone-600 mb-4">Please, add missing info. Try again</p>
      </Modal>
      <div className="w-[35rem] mt-16 ">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={handleCancel}
              className="text-stone-800 hover:text-stone-950 "
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input
            ref={title}
            title="Title"
            type="text"
          />
          <Input
            ref={description}
            title="Description"
            type="text"
            isTextArea // isTextArea is the same as isTextArea={true}
          />
          <Input
            ref={date}
            title="Due Date"
            type="date"
          />
        </div>
      </div>
    </>
  );
}
