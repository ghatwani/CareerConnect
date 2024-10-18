import React from 'react';

interface MeetingProps {
  params: {
    id: string;
  };
}

// Dynamic route component
const Meeting = async ({ params }: MeetingProps) => {
  const { id } = params;

  // Fetch or do any logic if needed
  // const data = await someFetchFunction(id);

  return (
    <div>
      Meeting Room: #{id}
    </div>
  );
};

export default Meeting;
