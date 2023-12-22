const WebsiteFor = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Who Can Use Task Vista Website
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            TaskVista is designed for diverse teams and individuals seeking
            enhanced productivity and collaboration. Ideal for businesses,
            project managers, freelancers, and students.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="https://i.ibb.co/Ht2207m/people-analyzing-growth-charts-23-2148866843.jpg"
                alt="content"
              />

              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Businesses
              </h2>
              <p className="leading-relaxed text-base">
                Businesses can leverage TaskVista for streamlined task
                allocation, progress tracking, and team collaboration. Enhance
                project management, boost productivity, and ensure seamless
                communication.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="https://i.ibb.co/ySjR6nw/business-team-discussing-ideas-startup-74855-4380.jpg"
                alt="content"
              />

              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Project Managers
              </h2>
              <p className="leading-relaxed text-base">
                Project managers can optimize workflows with TaskVista,
                assigning tasks, tracking progress, and ensuring efficient
                collaboration. Centralize project information for streamlined
                management and successful outcomes.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="https://i.ibb.co/8DNc3vb/work-progress-concept-illustration-114360-5241.jpg"
                alt="content"
              />

              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Freelancers
              </h2>
              <p className="leading-relaxed text-base">
                Freelancers can benefit from TaskVista by organizing and
                managing their projects efficiently. Assign tasks, set
                deadlines, and track progress for a more organized and
                productive freelance workflow.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="https://i.ibb.co/9nMvJQ7/studying-concept-illustration-114360-1301.jpg"
                alt="content"
              />

              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Students
              </h2>
              <p className="leading-relaxed text-base">
                Students can utilize TaskVista to organize assignments, set
                deadlines, and manage study tasks effectively. Enhance
                productivity and stay on top of academic responsibilities
                effortlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteFor;
