import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { BiEdit } from "react-icons/bi";
const EditModal = () => {
  return (
    <div className="">
      <Modal>
        <Button variant="secondary"> <BiEdit /> Edit</Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-3xl mt-10">
              <Modal.CloseTrigger />
              <Modal.Header>

                <Modal.Heading>Edit Facility</Modal.Heading>

              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form  className="max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow-lg  space-y-3 border my-5">

                    <div className="grid md:grid-cols-2 gap-6">

                      {/* Name */}
                      <div>
                        <label className="block mb-2 font-semibold text-gray-700">
                          Name
                        </label>
                        <input
                          required
                          type="text"
                          name="name"
                          placeholder="Enter facility name"
                          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>

                      {/* Facility Type */}
                      <div>
                        <label className="block mb-2 font-semibold text-gray-700">
                          Facility Type
                        </label>

                        <select
                          required
                          name="facility_type"
                          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Select facility type
                          </option>

                          <option value="Football">Football</option>
                          <option value="Cricket">Cricket</option>
                          <option value="Tennis">Tennis</option>
                          <option value="Badminton">Badminton</option>
                          <option value="Basketball">Basketball</option>
                          <option value="Volleyball">Volleyball</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      {/* Location */}
                      <div>
                        <label className="block mb-2 font-semibold text-gray-700">
                          Location
                        </label>
                        <input
                          required
                          type="text"
                          name="location"
                          placeholder="Enter location"
                          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>

                      {/* Price Per Hour */}
                      <div>
                        <label className="block mb-2 font-semibold text-gray-700">
                          Price Per Hour
                        </label>
                        <input
                          required
                          type="number"
                          name="price_per_hour"
                          placeholder="$50"
                          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>

                      {/* Capacity */}
                      <div>
                        <label className="block mb-2 font-semibold text-gray-700">
                          Capacity
                        </label>
                        <input
                          required
                          type="number"
                          name="capacity"
                          placeholder="Enter capacity"
                          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>

                      {/* Available Slots */}
                      <div>
                        <label className="block mb-2 font-semibold text-gray-700">
                          Available Slots
                        </label>
                        <input
                          required
                          type="text"
                          name="available_slots"
                          placeholder="10AM - 12PM"
                          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>

                      {/* Owner Email */}
                      <div>
                        <label className="block mb-2 font-semibold text-gray-700">
                          Owner Email
                        </label>
                        <input
                          required
                          type="email"
                          name="owner_email"
                          placeholder="owner@example.com"
                          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>

                      {/* Booking Count */}
                      <div>
                        <label className="block mb-2 font-semibold text-gray-700">
                          Booking Count
                        </label>
                        <input
                          required
                          type="number"
                          name="booking_count"
                          placeholder="0"
                          defaultValue={0}
                          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>

                    </div>
                    {/* Image URL */}
                    <div>
                      <label className="block mb-2 font-semibold text-gray-700">
                        Image URL
                      </label>
                      <input
                        required
                        type="url"
                        name="image"
                        placeholder="https://example.com/image.jpg"
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    {/* Description */}
                    <div>
                      <label className="block mb-2 font-semibold text-gray-700">
                        Description
                      </label>
                      <textarea
                        required
                        name="description"
                        rows="5"
                        placeholder="Write facility description..."
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-green-500 hover:bg-green-600 transition-all duration-300 text-white font-semibold py-3 rounded-xl"
                    >
                      Add Facility
                    </button>

                  </form>
                </Surface>
              </Modal.Body>
              <Modal.Footer>
                <Button slot="close" variant="secondary">
                  Cancel
                </Button>
                <Button slot="close">Send Message</Button>
              </Modal.Footer>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default EditModal;