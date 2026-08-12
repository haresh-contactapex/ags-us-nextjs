"use client";

import MediaLibrary from "./MediaLibrary";

export default function MediaPickerModal({ open, onClose, onSelect }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="max-h-[80vh] w-full max-w-3xl overflow-y-auto rounded-lg bg-white p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-[#06283c]">
            Select an image
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600"
          >
            ✕
          </button>
        </div>
        <MediaLibrary
          selectable
          onSelect={(item) => {
            onSelect(item);
            onClose();
          }}
        />
      </div>
    </div>
  );
}
