#include <stdio.h>

int main(){
    puts("守");
    puts("破");
    puts("離");

    int n1,n2;
    puts("2つの整数を入力してください。");
    printf("整数n1:");  scanf("%d", &n1);
    printf("整数n2:");  scanf("%d", &n2);
    printf("それらの積は%dです。\n", n1 * n2);

    int n3, n4, n5;
    puts("三つの整数を入力してください。");
    printf("整数n3:");  scanf("%d", &n3);
    printf("整数n4:");  scanf("%d", &n4);
    printf("整数n5:");  scanf("%d", &n5);
    printf("それらの和は%dです。\n", n3 + n4 + n5);

    return 0;
}