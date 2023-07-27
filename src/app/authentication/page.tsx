'use client';

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

import localStorageService from "@/ports/services/local-storage-service";

export default function Authentication(): void {

    const searchParams = useSearchParams();

    const router = useRouter();

    useEffect(() => {

        const token = searchParams.get('token');

        localStorageService.setToken(token || '');

        router.push('/home');

    }, []);
    
}
