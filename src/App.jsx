import React, { useEffect, useRef, useState } from "react";

function Form() {
  const nameRef = useRef("");
  const numberRef = useRef("");
  const descRef = useRef("");

  const [forms, setForms] = useState([{ name: "", number: "", desc: "" }]);

  useEffect(() => {
    const savedForms = localStorage.getItem("forms");
    if (savedForms) {
      setForms(JSON.parse(savedForms));
    }
  }, []);

  function handleAdd(event) {
    event.preventDefault();
    const newForm = forms.concat({ name: "", number: "", desc: "" });
    setForms(newForm);
  }

  function handleDelete(event) {
    event.preventDefault();
    if (forms.length > 1) {
      const deletedForm = [...forms];
      deletedForm.pop();
      setForms(deletedForm);
    } else {
      alert("Cannot delete last form");
    }
  }

function handleChange(index, field, value) {
   const updatadForms = [...forms]
   updatadForms[index][field] = value
   setForms(updatadForms)
}



  function handleSubmit(event) {
    event.preventDefault();
    localStorage.setItem("forms", JSON.stringify(forms));
  }

  return (
    <div className="flex flex-col justify-center items-center max-w-[1000px] mx-auto ">
      {forms.map((_, index) => (
        <div key={index} className="card1">
          <form className="flex gap-4  mb-5">
            <input
             value={forms.name}
             onChange={(e) => handleChange(index, 'name', e.target.value)}
              type="text"
              placeholder="Hemant"
              className="input input-bordered input-info w-full"
            />
            <input
               value={forms.number}
               onChange={(e) => handleChange(index, 'number', e.target.value)}
              type="number"
              placeholder="123"
              className="input input-bordered input-info w-full"
            />
            <input
              value={forms.desc}
              onChange={(e) => handleChange(index, 'desc', e.target.value)}
              type="text"
              placeholder="For testing remarks"
              className="input input-bordered input-info w-full"
            />
            <button
              onClick={handleDelete}
              className="w-40 border  px-2 bg-red-500 rounded-md text-white"
            >
              Remove
            </button>
          </form>
        </div>
      ))}
       <div className="w-full flex items-start gap-2">

      <button
        onClick={handleAdd}
        className="w-40 border h-10 bg-[#2998ff] rounded-md text-white mt-4"
        >
        Add more
      </button>

      <button
        onClick={handleSubmit}
        className="w-40 border h-10 bg-[#35f627] rounded-md text-white mt-4"
        >
        Submit
      </button>
        </div>
    </div>
  );
}

export default Form;