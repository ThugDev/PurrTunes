import { ReactNode } from "react"

export type AppProviderProps = {
    children: ReactNode
}

type WindowWithYT = Window & {
    YT: any
    onYouTubeIframeReady: () => void
    onYoutubeIframeAPIReady: () => void
}

declare global {
    interface Window extends WindowWithYT {}
}
