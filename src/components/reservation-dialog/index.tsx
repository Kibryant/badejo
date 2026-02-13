'use client'

import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogTitle,
    DialogDescription,
    DialogHeader,
} from '@/components/ui/dialog'
import { Whatsapp } from '../icons/whatsapp'
import { useTranslation } from 'react-i18next'

interface ReservationDialogProps {
    children: React.ReactNode
}

export function ReservationDialog({ children }: ReservationDialogProps) {
    const { t } = useTranslation('home')

    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="bg-[#F5F5F5] border border-gray-200 rounded-lg shadow-xl">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-[#7E4108]">
                        {t('escolha_reserva')}
                    </DialogTitle>
                    <DialogDescription className="text-gray-600 mt-2">
                        {t('clique_reserva')}
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col space-y-4 mt-6">
                    <a
                        href="https://api.whatsapp.com/send?phone=5511948919587&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20uma%20reserva%20para%20o%20restaurante%20Badejo%20em%20S%C3%A3o%20Paulo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-transparent text-[#7E4108] py-3 px-6 rounded-lg text-center font-semibold shadow-md flex items-center justify-center border border-[#7E4108] hover:bg-[#5c3007] hover:text-[#FCFDFE] transition-colors"
                    >
                        <Whatsapp className="w-6 h-6 mr-2 fill-[#7E4108] group-hover:fill-[#FCFDFE] transition-colors" />
                        {t('reservar_whatsapp')}
                    </a>
                    <a
                        href="https://widget.getinapp.com.br/VPz8yq6Q?fbclid=PAZXh0bgNhZW0CMTEAAaYHkzIonFkx_Yls96XyPFEKExCI_cto0QltKG1ZpWV3r3hJ9RmV_YdxVmA_aem_y_VYn5BmcbjgtXquk176YQ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#7E4108] text-white py-3 px-6 rounded-lg text-center font-semibold hover:bg-[#5c3007] transition-colors shadow-md flex items-center justify-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6 mr-2"
                        >
                            <title>{t('reservar_site')}</title>
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                        </svg>
                        {t('reservar_site')}
                    </a>
                </div>
            </DialogContent>
        </Dialog>
    )
}
