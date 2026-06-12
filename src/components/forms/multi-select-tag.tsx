'use client';

import React, { useState, KeyboardEvent } from 'react';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { X } from 'lucide-react';

interface MultiSelectTagProps {
  placeholder?: string;
  tags: string[];
  onChange: (tags: string[]) => void;
}

export function MultiSelectTag({ placeholder = "Ajouter un tag...", tags, onChange }: MultiSelectTagProps) {
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const newTag = inputValue.trim();
      if (newTag && !tags.includes(newTag)) {
        onChange([...tags, newTag]);
        setInputValue('');
      }
    }
  };

  const removeTag = (tagToRemove: string) => {
    onChange(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <div className="p-2 bg-white border border-input rounded-md shadow-sm focus-within:ring-1 focus-within:ring-ring">
      <div className="flex flex-wrap gap-2 mb-2">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="flex items-center gap-1 pr-1.5">
            {tag}
            <button
              type="button"
              onClick={() => removeTag(tag)}
              className="text-slate-500 hover:text-slate-900 focus:outline-none"
            >
              <X className="w-3 h-3" />
            </button>
          </Badge>
        ))}
      </div>
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={tags.length === 0 ? placeholder : "Ajouter un autre tag..."}
        className="border-0 shadow-none focus-visible:ring-0 px-1 py-1 h-8"
      />
    </div>
  );
}
