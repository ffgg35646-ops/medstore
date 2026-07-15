export default function ProfilePage() {
  return (
    <main className="min-h-screen px-6 py-16">

      <div className="mx-auto max-w-5xl">

        <div className="rounded-3xl bg-white p-8 shadow-xl">

          {/* Header */}
          <div className="flex flex-col items-center gap-5 border-b pb-8 md:flex-row">

            <div className="relative">
              <div className="flex h-32 w-32 items-center justify-center rounded-full bg-blue-100 text-4xl font-bold text-blue-600">
                MA
              </div>

              <button className="absolute bottom-0 right-0 rounded-full bg-blue-600 px-3 py-2 text-sm text-white">
                +
              </button>
            </div>


            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Mohamed Ali
              </h1>

              <p className="mt-2 text-gray-500">
                mohamed@example.com
              </p>

              <p className="text-gray-500">
                Customer Account
              </p>
            </div>

          </div>



          {/* Personal Information */}
          <section className="mt-10">

            <h2 className="mb-5 text-2xl font-bold text-gray-900">
              Personal Information
            </h2>


            <div className="grid gap-5 md:grid-cols-2">

              <input
                placeholder="Full Name"
                className="rounded-xl border px-4 py-3"
              />

              <input
                placeholder="Phone Number"
                className="rounded-xl border px-4 py-3"
              />

              <input
                placeholder="Email Address"
                className="rounded-xl border px-4 py-3"
              />

              <input
                placeholder="Date of Birth"
                className="rounded-xl border px-4 py-3"
              />

            </div>

          </section>



          {/* Address */}
          <section className="mt-10">

            <h2 className="mb-5 text-2xl font-bold text-gray-900">
              Shipping Address
            </h2>


            <div className="grid gap-5">

              <input
                placeholder="Street Address"
                className="rounded-xl border px-4 py-3"
              />

              <div className="grid gap-5 md:grid-cols-3">

                <input
                  placeholder="City"
                  className="rounded-xl border px-4 py-3"
                />

                <input
                  placeholder="Country"
                  className="rounded-xl border px-4 py-3"
                />

                <input
                  placeholder="Postal Code"
                  className="rounded-xl border px-4 py-3"
                />

              </div>

            </div>

          </section>



          {/* Payment */}
          <section className="mt-10">

            <h2 className="mb-5 text-2xl font-bold text-gray-900">
              Payment Methods
            </h2>


            <div className="rounded-2xl border p-5">

              <p className="font-semibold text-gray-800">
                Saved Cards
              </p>

              <div className="mt-4 flex items-center justify-between rounded-xl bg-gray-50 p-4">

                <span>
                  💳 Visa ending in 4242
                </span>

                <button className="text-blue-600">
                  Edit
                </button>

              </div>


              <button className="mt-4 rounded-xl bg-blue-600 px-5 py-3 text-white">
                Add New Payment Method
              </button>

            </div>

          </section>



          {/* Orders */}
          <section className="mt-10">

            <h2 className="mb-5 text-2xl font-bold text-gray-900">
              Recent Orders
            </h2>


            <div className="rounded-xl bg-gray-50 p-5">

              <p>
                Order #MS10025
              </p>

              <p className="text-gray-500">
                Status: Delivered
              </p>

            </div>

          </section>



          <button className="mt-10 w-full rounded-xl bg-blue-600 py-4 font-semibold text-white hover:bg-blue-700">
            Save Changes
          </button>


        </div>

      </div>

    </main>
  );
}
