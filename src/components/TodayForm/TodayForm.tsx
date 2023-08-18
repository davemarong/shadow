import React from "react";

interface Props {
  setDescription: (description: string) => void;
  setTitle: (title: string) => void;
  setTargetPerson: (targetPerson: string) => void;
}
export const TodayForm = ({
  setDescription,
  setTitle,
  setTargetPerson,
}: Props) => {
  const handleDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };
  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleTargetPerson = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTargetPerson(e.target.value);
  };
  return (
    <div className="container mx-auto flex flex-col items-center">
      <label htmlFor="title">Title</label>
      <input
        id="title"
        className="mt-1 w-64  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400"
        type="text"
        onChange={handleTitle}
      />
      <label htmlFor="targetPerson">Target person</label>
      <input
        id="targetPerson"
        className="mt-1 w-64  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400"
        type="text"
        onChange={handleTargetPerson}
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
    </div>
  );
};
