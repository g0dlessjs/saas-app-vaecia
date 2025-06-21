"use client";

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

const CompanionForm = () => {
  return (
    <div>
      <h1>Companion Form 1:06:38</h1>
    </div>
  );
};

export default CompanionForm;
