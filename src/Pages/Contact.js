import React from 'react';

const Contact = () => {
  return (
    <section className="py-16  bg-white">
      <div className="container mx-auto bg-gradient-to-tr from-white w-screen to-blue-100 rounded-br-full rounded-tl-full  px-4">
        <div className="flex flex-col lg:flex-row">
        
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <img src="image/contact.png" alt="Contact" className="h-[600px]" />
          </div>
       
          <div className="lg:w-1/2 lg:pl-8">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <form className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium">Name</label>
                <input type="text" id="name" name="name" className="mt-1 p-3 block w-full rounded-lg bg-white border border-gray-300 focus:border-blue-500 focus:outline-none" />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
                <input type="email" id="email" name="email" className="mt-1 p-3 block w-full rounded-lg bg-white border border-gray-300 focus:border-blue-500 focus:outline-none" />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium">Message</label>
                <textarea id="message" name="message" rows="4" className="mt-1 p-3 block w-full rounded-lg bg-white border border-gray-300 focus:border-blue-500 focus:outline-none"></textarea>
              </div>
              <button type="submit" className="py-3 px-6 bg-gradient-to-tr from-gray-400 to-gray-200 text-white font-bold rounded-lg  hover:bg-gradient-to-br from-slate-600 to-slate-300 duration-500 text-xl">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
