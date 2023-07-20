'use client';

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

import { showcaseBackendService } from "@/ports/services/showcase-backend-service";
import User from "@/domain/entities/users/user";

export default function Authentication(): void {

    const searchParams = useSearchParams();

    const router = useRouter();

    useEffect(() => {

        const token = searchParams.get('token');

        localStorage.setItem('token', token || '');

        showcaseBackendService
            .get<User>('/user')
            .then(response => {
                response.data; // create new user in redux state
            });

        router.push('/home');

    });
    
}