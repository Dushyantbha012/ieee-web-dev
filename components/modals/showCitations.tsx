"use client";
import React, { useState, useMemo } from "react";
import Modal from "./modal";
import Heading from "./ModalInputs/Heading";
import useCitations from "@/hooks/useCitations";

const ShowCitations = () => {
  const citation = useCitations();

  const onBack = () => {
    citation.onClose();
  };
  const actionLabel = useMemo(() => {
    return "Close";
  }, []);

  let bodyContent = (
    <div>
      <Heading title="Citations here" />
    </div>
  );

  return (
    <Modal
      isOpen={citation.isOpen}
      onClose={citation.onClose}
      onSubmit={() => {}}
      actionLabel={actionLabel}
      secondaryAction={onBack}
      title="Citations for this response"
      body={bodyContent}
    />
  );
};

export default ShowCitations;
