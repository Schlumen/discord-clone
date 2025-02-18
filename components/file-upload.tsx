"use client";

import { FileIcon, X } from "lucide-react";
import Image from "next/image";

import { UploadDropzone } from "@/lib/uploadthing";
import { useState } from "react";

interface FileUploadProps {
  onChange: (url?: string, type?: string) => void;
  value: string;
  endpoint: "serverImage" | "messageFile";
}

export const FileUpload = ({ onChange, value, endpoint }: FileUploadProps) => {
  const [fileType, setFileType] = useState("");

  if (value && fileType !== "application/pdf") {
    return (
      <div className="relative h-20 w-20 mx-auto">
        <Image
          fill
          src={value}
          alt="Upload"
          className="rounded-full"
          objectFit="cover"
        />
        <button
          onClick={() => onChange("")}
          className="bg-rose-500 text-white p-1 rounded-full shadow-sm absolute top-0 right-0"
          type="button"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }

  if (value && fileType === "application/pdf") {
    return (
      <div className="relative flex items-center p-2 mt-2 rounded-md bg-background/10">
        <FileIcon className="h-10 w-10 fill-indigo-200 stroke-indigo-400" />
        <a
          href={value}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 text-sm text-indigo-500 dark:text-indigo-400 hover:underline"
        >
          {value}
        </a>
        <button
          onClick={() => onChange("")}
          className="bg-rose-500 text-white p-1 rounded-full shadow-sm absolute -top-2 -right-2"
          type="button"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }

  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={res => {
        setFileType(res?.[0].type);
        onChange(res?.[0].url, res?.[0].type);
      }}
      onUploadError={(error: Error) => {
        console.log(error);
      }}
    />
  );
};
