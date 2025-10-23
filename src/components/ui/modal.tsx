"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "./utils";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 bg-black/50 border-4 border-red-500" />
        {children}
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

export function ModalContent({ children, className, ...props }: React.ComponentProps<typeof DialogPrimitive.Content>) {
  return (
    <DialogPrimitive.Content
      className={cn("fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white p-6 shadow-lg rounded-lg z-[100] overflow-auto max-h-[90vh]", className)}
      {...props}
    >
      {children}
    </DialogPrimitive.Content>
  );
}

export function ModalHeader({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("text-lg font-semibold", className)} {...props}>{children}</div>;
}

export function ModalBody({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mt-2", className)} {...props}>{children}</div>;
}

export function ModalFooter({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mt-4 flex justify-end space-x-2", className)} {...props}>{children}</div>;
}
