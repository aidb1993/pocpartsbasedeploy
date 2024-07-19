import React from "react";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTrigger,
} from "@/components/ui/dialog";
import DemoForm from "../forms/DemoForm";

const ModalCard = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay />
      <DialogContent>
        <DialogTrigger asChild></DialogTrigger>
        <DemoForm />
      </DialogContent>
    </Dialog>
  );
};

export default ModalCard;
