const LiveChatCard = ({ messageData }) => {
    return (
        <div className='flex items-center'>
            <img className="w-8 rounded-4xl" src="/assets/images/user.jpg" alt="" />
            <span className='text-semibold'>{messageData.name}: </span>
            <span className='ml-1'>{messageData.message} </span>
        </div>
    )
};

export default LiveChatCard;




