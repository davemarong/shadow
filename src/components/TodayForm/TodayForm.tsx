import React from "react";

interface Props {
  setDescription: (description: string) => void;
  setTitle: (title: string) => void;
}
export const TodayForm = ({ setDescription, setTitle }: Props) => {
  const handleDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };
  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleSubmit = () => {};
  return (
    <div className="container mx-auto flex flex-col items-center">
      <label htmlFor="title">Title</label>
      <input
        id="title"
        className="mt-1 w-64  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400"
        type="text"
        onChange={handleTitle}
      />
      <label htmlFor="description">Description</label>
      <textarea
        name="postContent"
        id="description"
        className="mt-1 w-96  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400"
        onChange={handleDescription}
        rows={6}
        cols={40}
      />
      <button
        onClick={handleSubmit}
        className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
      >
        Save
      </button>
    </div>
  );
};
