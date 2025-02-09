import { EnvelopeBase } from "@/types/base-types";
import { useState } from "react";

interface Props {
  initialCategory: string;
  initialBudget: number;
  formSubitLogic: (envelope: EnvelopeBase) => Promise<void>;
  resetOnSubmit?: boolean;
}

export default function EnvelopeForm({
  initialCategory,
  initialBudget,
  formSubitLogic,
  resetOnSubmit,
}: Props) {
  const [category, setCategory] = useState(initialCategory);
  const [budget, setBudget] = useState(initialBudget);

  function handleCategoryChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setCategory(value);
  }

  function handleBudgetChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setBudget(Number(value));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    formSubitLogic({ category, budget });

    if (resetOnSubmit) {
      setCategory("category");
      setBudget(1);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="category">Category: </label>
      <input
        id="category"
        placeholder="Insert category..."
        value={category}
        onChange={handleCategoryChange}
        required
      />
      <label htmlFor="budget">Budget: </label>
      <input
        id="budget"
        placeholder="Insert budget..."
        type="number"
        min={1}
        max={9999999}
        value={budget}
        onChange={handleBudgetChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}
