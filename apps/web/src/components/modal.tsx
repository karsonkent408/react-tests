
interface ModalProps {  
    children: React.ReactNode;
    setIsOpen: (isOpen: boolean) => void;
}

export const Modal = ({ children, setIsOpen }: ModalProps) => {
    return (
        <div id='create-modal' className='fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center' onClick={() => setIsOpen(false)}>
            <div className='bg-white p-4 rounded-md' onClick={(e) => e.stopPropagation()}>
                { children }
            </div>
        </div>
    )
}