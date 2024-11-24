using Microsoft.EntityFrameworkCore;

namespace BotService.Infrastructure;

public class BotServiceDbContext : DbContext
{
    public BotServiceDbContext(DbContextOptions<BotServiceDbContext> options)
        : base(options) { }
}
