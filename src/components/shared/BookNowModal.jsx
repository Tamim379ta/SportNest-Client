"use client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { redirect } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const BookNowModal = ({ data }) => {
  const { price_per_hour, name } = data;
  const [hours, setHours] = useState(1);

  const totalPrice = price_per_hour * hours;

  const onSubmit = (e) => {
    e.preventDefault()

    toast.success('Booking Successfull')
    redirect('/all-facilities')
  }
  return (
    <div>

      <Modal>
        <Button className={'bg-green-800 text-white w-full rounded-xl'}>Book Now</Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md mt-10">
              <Modal.CloseTrigger />

              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form onSubmit={onSubmit} className="flex flex-col gap-4">

                    <TextField  defaultValue={name} className="w-full" name="facilityName">
                      <Label>Facility Name</Label>
                      <Input required placeholder="Enter facility name" />
                    </TextField>

                    <TextField  className="w-full" name="bookingDate">
                      <Label>Booking Date</Label>
                      <Input required type="date" />
                    </TextField>

                    <TextField  className="w-full" name="timeSlot">
                      <Label>Time Slot</Label>
                      <Input required placeholder="e.g. 10:00 AM - 12:00 PM" />
                    </TextField>

                    <TextField className="w-full" name="hours">
                      <Label>Hours</Label>

                      <Input
                        required
                        type="number"
                        min="1"
                        value={hours}
                        onChange={(e) => setHours(Number(e.target.value))}
                        placeholder="Enter hours"
                      />
                    </TextField>

                    <div className="p-4 rounded-xl bg-gray-100 border">
                      <p className="text-sm text-gray-500">Total Price</p>

                      <h2 className="text-2xl font-bold text-green-600">
                        ${totalPrice}
                      </h2>
                    </div>
                    <Modal.Footer>

                      <Button type="submit" className={'bg-green-800 text-white'} >Confirm Booking</Button>
                    </Modal.Footer>
                  </form>
                </Surface>
              </Modal.Body>

            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>

    </div>
  );
};

export default BookNowModal;