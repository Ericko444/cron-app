const APP_URLS = [
    "https://practice-architecture.fly.dev",
    "https://practice-archi-front.fly.dev"
];

Deno.cron("Ping URLs", "* * * * *", async () => {
    for(const url of APP_URLS) {
        await fetch(url);
    }
});
