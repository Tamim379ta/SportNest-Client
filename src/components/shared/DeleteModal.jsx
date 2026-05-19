"use client";
import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { BiTrash } from "react-icons/bi";

const DeleteModal = ({ data }) => {
  const { name, _id } = data
  const handleDlete = async (e) => {
    e.preventDefault()
    const res = await fetch(`http://localhost:5000/all-facilities/${_id}`, {
      method: 'DELETE',
      headers: {
        'contenet-type': 'application/json'
      }
    })
    const data = await res.json()
    toast.error('Deleted Succeccfully')
    redirect('/all-facilities')
  }

  return (
    <div>
      <AlertDialog>
        <Button className={'text-red-500 border border-red-500'} variant="outline"> <BiTrash /> Delete</Button>
        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-100">
              <AlertDialog.CloseTrigger />
              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />
                <AlertDialog.Heading>Delete project permanently?</AlertDialog.Heading>
              </AlertDialog.Header>
              <AlertDialog.Body>
                <p>
                  This will permanently delete <strong>{name}</strong> and all of its
                  data. This action cannot be undone.
                </p>
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button slot="close" variant="tertiary">
                  Cancel
                </Button>
                <Button onClick={handleDlete} slot="close" variant="danger">
                  Delete
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>


    </div>
  );
};

export default DeleteModal;